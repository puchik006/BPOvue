const app = Vue.createApp({
    data() {
        return {
            departureCity: null,
            distinationCity: null,
            departureDate: null,
            arrivalDate: null,
        }
    },
        methods:{
            submit() {
                if (arrivalDate < departureDate) alert("Arrival date can't be earlier than departure")
                if (departureCity == null) alert("Please fill departure city")
                if (distinationCity == null) alert("Please fill distination city")
                if (departureDate == null) alert("Please fill departure date")
                if (arrivalDate == null) alert("Please fill arrival date")
            },
            changeItem(selected,citytype){
                if  (citytype == "departure") departureCity = selected
                if  (citytype == "distination") distinationCity = selected
            },
            inputDate(sdate,datetype){
                if  (datetype == "departure") departureDate = sdate
                if  (datetype == "arrival") arrivalDate = sdate
                allert(arrivalDate)
                allert(departureDate)
            }
        }
})

// localStorage.setItem(array, JSON.stringify(array));
// array = JSON.parse(localStorage.getItem("array"));

// console.log(typeof array); // объект
// console.log(array); // [1, 2, 3]