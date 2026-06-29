function List(){

  
        const fruits=["apples","mango","coconut"]

        const ListItems=fruits.map(fruit=><li>{fruit}</li>)

        return(
            <><br></br>
            <p>LIST OF ITEMS</p>
        
        <ul>{ListItems}</ul>
        </>
    );

}

export default List