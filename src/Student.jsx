 //prop-they read only properties thet are shared between components

function Student(Prop){
    return(
        <div>
            <p> Name :{Prop.name}</p>
            <p>Age :{Prop.age}</p>
            <p>Student :{Prop.isStudent ? "Yes":"No"}</p>

        </div>
        
    );
}


export default Student