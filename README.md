# REA Challenge

## Challenge
Given a JSON object with a lists of properties (houses) results and a list of saved properties (houses), create the business logic to add a property from the results list into the saved list and remove a property from the saved list. Also, create a simple user interface to visualize the logic.


### JSON Data
```json
{
  "results": [
    {
      "price": "$726,500",
      "agency": {
        "brandingColors": {
          "primary": "#ffe512"
        },
        "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
      },
      "id": "1",
      "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    },
    {
      "price": "$560,520",
      "agency": {
        "brandingColors": {
          "primary": "#fcfa3b"
        },
        "logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
      },
      "id": "2",
      "mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
    },
    {
      "price": "$826,500",
      "agency": {
        "brandingColors": {
          "primary": "#57B5E0"
        },
        "logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
      },
      "id": "3",
      "mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
    }
  ],
  "saved": [
    {
      "price": "$526,500",
      "agency": {
        "brandingColors": {
          "primary": "#000000"
        },
        "logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
      },
      "id": "4",
      "mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
    }
  ]
}
```


## Implementation
I create the app using ReactJS and Redux to handle the frontend and to handle the state of the arrays.

### Data Parsing
Because a property can be in both results and saved array I parsed the data into 3 different objects. First I map the results list to a set of property ids and I did the same thing with the saved list. Then I saved the property objects in a map where the key is the property id and the value is the property object.

```javascript
let data = getData()
let results = Set()
let saved = Set()
let properties = Map<string, IPropertyMap>()

data.results.forEach(prop => {
  results = results.add(prop.id)
  properties = properties.set(prop.id, fromJS(prop))
})

data.saved.forEach(prop => {
  saved = saved.add(prop.id)
  properties = properties.set(prop.id, fromJS(prop))
})
```
> [src/actions.ts](src/actions.ts)


### Add Logic
The logic behind the adding a property into the set of saved properties is as follows.
 * Pass the id of the property that is going to be added
 * Check if the id exists in the properties map
 * If so add


```javascript
function addPropertyHandler(oldState, action) {
  if(oldState.hasIn(['properties', action.payload.id])){
    return oldState.update('saved', set => set.add(action.payload.id))
  }
  return oldState
}
```
> [src/reducer.ts](src/reducer.ts)


### Remove Logic
The logic behind the removing a property from the set of saved properties is as follows.
 * Pass the id of the property that is going to be removed
 * Check if the id exists in the properties map
 * If so remove


```javascript
function removePropertyHandler(oldState, action){
  if(oldState.hasIn(['properties', action.payload.id])){
    return oldState.update('saved', set => set.delete(action.payload.id))
  }
  return oldState
}
```
> [src/reducer.ts](src/reducer.ts)

## Get Started
To run the app just open [build/index.html](build/index.html) file

### Development
To run the development version you need to have npm installed. Once npm is install run `$ npm install` to install the dependencies then run `$ npm start` to start the webpack-dev-server and load the app in `localhost:3000`

### Testing
I used [Jest](https://facebook.github.io/jest/) (a great testing framework) to implement tests. To run the test follow the step from the [Development](#Development) section and run `$ npm test`

### Production
To rebuild the production code follow the steps from the [Development](#Development) section and run `$ npm run build`
