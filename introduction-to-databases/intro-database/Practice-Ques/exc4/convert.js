db.orders.insertOne({
  orderId: NumberInt(12345),               
  orderDate: new Date("2024-01-15"),      
  totalAmount: NumberDecimal("99.99"),    
  items: ["item1", "item2"]                
});