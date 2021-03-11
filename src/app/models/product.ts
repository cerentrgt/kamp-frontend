import { ProductComponent } from "../components/product/product.component";

export interface Product{
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;

}