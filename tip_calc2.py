bill = int(input("what is the bill price?"))
service = input("How was your service? good? fair? bad?").lower()
split = int(input("Split how many ways"))
if(service == "good"):
    total_bill = bill+bill*0.2
    print(bill * 0.20)
    print("your tip amount was " + str(bill*0.2))
    print("Your total amount is " + str(total_bill))
    print("each person pays " + str(total_bill/split))
elif(service == "fair"):
    total_bill = bill+bill*0.15
    print(bill * 0.15)
    print("your tip amount was " + str(bill*0.15))
    print("Your total amount is " + str(total_bill))
    print("each person pays " + str(total_bill/split))
elif(service == "bad"):
    total_bill = bill+bill*0.10
    print(bill * 0.10)
    print("your tip amount was " + str(bill*0.10))
    print("Your total amount is " + str(total_bill))
    print("each person pays " + str(total_bill/split))
