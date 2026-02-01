import fs from 'fs'

function borrow(memberId, bookId) {
    try {
        let data = JSON.parse(fs.readFileSync("member.json", "utf-8"));
        let member = data.find((value) => value.memberId == memberId);

        if (!member) {
            return "Member not found";
        }

        let type = member.membershipType;

        let data1 = JSON.parse(fs.readFileSync("book.json", "utf-8"));
        let book = data1.find((value) => value.bookId == bookId);

        if (!book) {
            return "Book not found";
        }

        let price = book.price;

        if (type === "Gold") {
            let result = price * 15 / 100;
            let final = Math.ceil(price - result);
            return final;
        }

        if (type === "Normal") {
            let result = price * 5 / 100;
            let final = Math.ceil(price - result);
            return final;
        }

        return price;

    } catch (error) {
        console.log("Error");
    }
}

export default borrow;