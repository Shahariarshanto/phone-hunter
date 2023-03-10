
const getPhones = (inputValue)=>{


    
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
    .then(res=> res.json())
    .then(data=> displayPhones(data.data))
    .catch(err=> console.log(err))
}


const displayPhones = (data) => {

    
    
    document.getElementById("simple-search").value = "";

    if (data.length == 0) {
       const noPhone = document.getElementById("no-phone")
       noPhone.classList.remove("hidden");
       console.log(data.length)
    }else{
        const noPhone = document.getElementById("no-phone")
        noPhone.classList.add("hidden");
    }

    const phones = document.getElementById('phone-cards')  ;
    
    phones.innerHTML = '';



    data.map(phone =>{


      const div =  document.createElement('div');

      div.classList.add("max-w-sm","bg-white","border","border-gray-200","rounded-lg","shadow")


        div.innerHTML = `
        <a href="#">
          <img
            class="rounded-t-lg m-auto pt-4"
            src="${phone.image}"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              ${phone.phone_name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Brand: ${phone.brand}
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      
        
        `;

        
        phones.appendChild(div)
               
    })

    // spinier stopping
    toggleSpinner(false)


}


const  searchButton = () => {

    // spinier starting
    toggleSpinner(true)

    const inputValue = document.getElementById("simple-search").value;

    console.log(inputValue);
    
    getPhones(inputValue)
}




const toggleSpinner = isLoading =>{
    if(isLoading){
        document.getElementById("spinner").classList.remove("hidden");
    }else{
        document.getElementById("spinner").classList.add("hidden");
    }
}