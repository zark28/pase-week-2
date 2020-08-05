// const _ = (query) => document.querySelector(query);


// 
// const auth = () =>{
//     //asking for user info
//     let eMail = prompt("Please enter your PaSE email address");
//     let userName = prompt ("Please enter your Pase user name ");

//     if(eMail == "" || userName == ""){
//         alert("please provide data for all fields!")
        
//     }else{
//         console.log("Your Email is " + eMail)
//         console.log("Your User name is " + userName)
//     }
// }

// auth()


    //putting query Selector in a variable

    const $ = (query) => document.querySelector(query);

    //adding an event listener to submit buttton

    const submit = $("#button").addEventListener("click", () => {
        var uName = $("#name").value;
        var eMail = $("#email").value;

        if(uName == "" || eMail == ""){
            alert("Please provide data for All fields")

        }else{

            console.log(`User Name is ${uName}`);
            console.log(`Email is ${eMail}`);
            alert("Details submited Successfully");
        }


    });
    
    


// _("#button").addEventListener("click", () => {
//     const userName = _("#name").value
//     console.log(userName);
// })