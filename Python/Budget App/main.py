class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        return False

    def get_balance(self):
        return sum(item["amount"] for item in self.ledger)

    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount):
        return amount <= self.get_balance()

    def __str__(self):
        title = f"{self.name:*^30}"

        entries = []
        for item in self.ledger:
            description = item["description"][:23]
            amount = f"{item['amount']:.2f}"
            entries.append(f"{description:<23}{amount:>7}")

        total = f"Total: {self.get_balance():.2f}"

        return title + "\n" + "\n".join(entries) + "\n" + total


def create_spend_chart(categories):
    spent = []
    for category in categories:
        total_spent = sum(
            -item["amount"] for item in category.ledger if item["amount"] < 0
        )
        spent.append(total_spent)

    total_spent_all = sum(spent)

    percentages = []
    if total_spent_all > 0:
        for amount in spent:
            percent = int((amount / total_spent_all) * 100)
            percent = (percent // 10) * 10
            percentages.append(percent)
    else:
        percentages = [0] * len(categories)

    chart = "Percentage spent by category\n"

    for i in range(100, -10, -10):
        chart += f"{i:>3}|"
        for percent in percentages:
            if percent >= i:
                chart += " o "
            else:
                chart += "   "
        chart += " \n"

    chart += "    " + "-" * (len(categories) * 3 + 1) + "\n"

    max_name_length = max(len(category.name) for category in categories)
    for i in range(max_name_length):
        chart += "     "
        for category in categories:
            if i < len(category.name):
                chart += f"{category.name[i]}  "
            else:
                chart += "   "
        if i < max_name_length - 1:
            chart += "\n"

    return chart


def main():
    food = Category("Food")
    clothing = Category("Clothing")
    entertainment = Category("Entertainment")

    food.deposit(900, "deposit")
    food.deposit(45.67, "milk, cereal, eggs, bacon, bread")
    food.deposit(1000, "initial deposit")
    food.withdraw(10.15, "groceries")
    food.withdraw(15.89, "restaurant and more food for dessert")

    clothing.deposit(1000, "initial deposit")
    clothing.withdraw(50, "jeans")

    entertainment.deposit(1000, "initial deposit")
    entertainment.withdraw(100, "movie tickets")

    food.transfer(50, clothing)

    print(food)
    print()
    print(clothing)
    print()
    print(entertainment)
    print()

    print(f"Food balance: {food.get_balance():.2f}")
    print(f"Clothing balance: {clothing.get_balance():.2f}")
    print(f"Entertainment balance: {entertainment.get_balance():.2f}")
    print()

    categories = [food, clothing, entertainment]
    chart = create_spend_chart(categories)
    print(chart)


main()
