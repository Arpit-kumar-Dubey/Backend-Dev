db.books.updateOne(
  { title: "Node.js Guide" },
  {
    $set: {
      available: false,
      borrower: "User123"
    }
  }
);