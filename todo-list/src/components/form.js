import React from "react";

function Form() {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
    }
     return(
        <form>
              <input onChange={inputTextHandler} type= 'text'/>
              <button>Add</button>
        </form>
       

     );
}

export default Form;