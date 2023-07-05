class Product{
    image;
    name;
    price;
    
    constructor(image,name,price,category){
        this.image = image; 
        this.name = name;
        this.price = price;
    }
    static getFakeData(){
        return[
            new Product("/Akita/IMG_3417.jpg", "Stylish T-shirt", 1200, "remeras"),
            new Product("/Akita/IMG_3420.jpg", "Stylish T-shirt", 1200, "remeras"),
            new Product("/Akita/IMG_3466.jpg", "Stylish T-shirt", 1200, "remeras"),
            new Product("/Akita/IMG_4260.jpg", "Stylish T-shirt", 1200, "remeras"),
            new Product("/Akita/IMG_4306.jpg", "Stylish T-shirt", 1200, "remeras"),
            new Product("/Akita/IMG_4352.jpg", "Stylish T-shirt", 1200, "remeras"),
          ];
    }
}


