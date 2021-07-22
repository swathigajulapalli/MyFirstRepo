var myStorage = {
    "car" : {
        "inside" : {
            "glove box" : "cool",
            "passenger seat" : "leather"
        },
        "out side" : {
            "trunk" : "jack"
        }
    }
}

var glove = myStorage.car.inside['glove box'];
console.log(glove)

console.log(myStorage.car["out side"].trunk)