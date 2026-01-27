const selectTag = document.querySelectorAll("select");
console.log(selectTag);

selectTag.forEach((tag,id)=>{
    
    for (const countriesCode in countries) {
        let selected;
        if(id==0 && countriesCode=="en_GB"){
            selected="selected";
        }
        else if(id == 1 && countriesCode=="hi_IN"){
            selected="selected";
        }
    let option =   `<option value="${countriesCode}" ${selected} >${countries[countriesCode]}</option>`
    tag.insertAdjacentHTML("beforeend", option);
}

});
