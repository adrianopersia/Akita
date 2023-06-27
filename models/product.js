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
            new Product("https://picsum.photos/200", "Stylish T-shirt", 1200, "remeras"),
            new Product("https://picsum.photos/200", "Cozy Hoodie", 2500, "buzos"),
            new Product("https://picsum.photos/200", "Elegant Dress", 1800, "remeras"),
            new Product("https://picsum.photos/200", "Denim Jeans", 1500, "pantalones"),
            new Product("https://picsum.photos/200", "Warm Jacket", 3000, "chalecos"),
            new Product("https://picsum.photos/200", "Striped Polo Shirt", 900, "remeras"),
            new Product("https://picsum.photos/200", "Sporty Tracksuit", 2800, "buzos"),
            new Product("https://picsum.photos/200", "Casual Shorts", 800, "pantalones"),
            new Product("https://picsum.photos/200", "Knitted Sweater", 2200, "chalecos"),
            new Product("https://picsum.photos/200", "Printed Tunic", 1350, "remeras"),
            new Product("https://picsum.photos/200", "Cotton Joggers", 1100, "pantalones"),
            new Product("https://picsum.photos/200", "Quilted Vest", 1900, "chalecos"),
            new Product("https://picsum.photos/200", "Graphic Sweatshirt", 1700, "buzos"),
            new Product("https://picsum.photos/200", "Formal Pants", 2000, "pantalones"),
            new Product("https://picsum.photos/200", "Printed Blouse", 1250, "remeras"),
            new Product("https://picsum.photos/200", "Fleece Jacket", 2700, "chalecos"),
            new Product("https://picsum.photos/200", "Slim Fit Jeans", 1600, "pantalones"),
            new Product("https://picsum.photos/200", "Hooded Sweatshirt", 2300, "buzos"),
            new Product("https://picsum.photos/200", "Classic Polo Shirt", 1000, "remeras"),
            new Product("https://picsum.photos/200", "Cargo Pants", 1400, "pantalones")
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
