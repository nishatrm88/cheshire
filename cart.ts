
export type CartItem = { id:string; name:string; qty:number; price:number; variant?:string };
export const money = (n:number) => `RM ${n.toFixed(2)}`;
