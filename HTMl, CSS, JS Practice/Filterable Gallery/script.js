const galleryFilter = document.querySelector(".gallery-filter"), 
galleryItems = document.querySelectorAll(".gallery-item");

galleryFilter.addEventListener("click", (event)=>{
    if(event.target.classList.contains("filter-item")){
        galleryFilter.querySelector(".active").classList.remove("active");

        event.target.classList.add("active");

        const filterValue = event.target.getAttribute("data-filter");

        galleryItems.forEach((item)=>{
            if(item.classList.contains(filterValue)){
                item.classList.remove("hide");
            }
            else{
                item.classList.add("hide");
            }
        });
    }
})