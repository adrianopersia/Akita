class Product{
    image;
    name;
    price;
    category;
    
  
    constructor(image,name,price,category){
        this.image = image; 
        this.name = name;
        this.price = price;
        this.category = category;
    }
    static getFakeData(){
        return[
            new Product("/Akita/IMG_3417.jpg", "Stylish T-shirt", 1200, "remeras"),
            new Product("/Akita/IMG_3420.jpg", "Stylish T-shirt", 1200, "remeras"),
          ];
    }
    static getSuggestions(){
        return[
            "remeras",
            "buzos",
            "pantalones",
            "chalecos",
        ]
    }
}


