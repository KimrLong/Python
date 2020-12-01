#Electronic Phone Book
# 1. Look up an entry
# 2. Set an entry
# 3. Delete an entry
# 4. List all entries
# 5. Quit
# What do you want to do (1-5)?

# print('this far')
# def welcome():
#     entry = int(input("""Welcome to your contacts.
#                       >>>The commands for this phone book are: 1, 2, 3, or 4 <<<
#                       >>>What would you like to do?<<<
#                       1. List all entries
#                       2. Set an entry
#                       3. Look up an entry
#                       4. Delete an entry
#                       5. Quit
#                       Enter your entry here:    """))

#     return entry

# def phonebook():
#     contact = {}
#     while True:
#         entry = welcome()
#         if entry == 1:
#             if bool(contact) != False:
#                 for k, v in contact.items():
#                     print(k, '-->', v)
#             else:
#                 print('Phonebook is empty. Go to the menu to add a new contact')
#         elif entry == 2:
#             contact_name = input('Enter contact name here: ')
#             phone_number = input('Enter phone number here: ')
#             if phone_number not in contact.items():
#                 contact.update({contact_name:phone_number})
#                 print('contact is now saved')
#                 print('Your updated phonebook is shown below: ')
#                 for k, v in contact.items():
#                     print(k, '-->', v)
#             else:
#                 print('That contact already exists.')
#         elif entry == 3:
#             name = input('Enter the name of the contact you\'d like to find:  ')
#             if name in contact:
#                 print('The contact is', name,':',contact[name])
#             else:
#                 print('This contact does not exist')
#         elif entry == 4:
#             name = input('Enter name of contact you wish to delete: ')
#             if name in contact:
#                 print('The contact is',name,':', contact[name])
#             else:
#                 print('Contact does not exist. \nReturn to the menu to enter the contact name')
            
#             confirm = input('Are you sure you wish to delete this contact? yes/no?: ')
#             if confirm.capitalize() == 'Yes':
#                 contact.pop(name,None)
#                 for k, v in contact.items():
#                     print('Your updated phonebook is shown below:')
#                     print(k, '-->', v)
#             else:
#                 print('Return to the menu.')
#         elif entry == 5:
#             print('Goodbeye')
#             break
#         else:
#             print('Entry does not exist.')

# from textwrap import dedent
# d = {
#     "Levi": "832-291-7066",
#     "Tracy": "541-990-0760",
#     "Skittles": "666-666-6666"
# }


# def phonebook(d):
#     print("Electronic Phone Book")
#     print("=" * 21)
#     print(dedent("""
#     1. Look up an entry
#     2. Set an entry
#     3. Delete an entry
#     4. List all entrys
#     5. Quit
#     """))
#     choice = input("What do you want to do (1-5)? ")

#     if choice == "1":
#         name = input("Name: ")
#         if name in d:
#             print(d[name])
#         else:
#             print("{} not found".format(name))
#         input("")
#         phonebook(d)
#     elif choice == "2":
#         name = input("Name: ")
#         number = input("Number: ")
#         d[name] = number
#         input("Entry stored for {}".format(name))
#         phonebook(d)
#     elif choice == "3":
#         name = input("Name: ")
#         del d[name]
#         input("Deleted entry for {}".format(name))
#         phonebook(d)
#     elif choice == "4":
#         for key in d:
#             print("Found entry for {}: {}".format(key, d[key]))
#         input("")
#         phonebook(d)
#     elif choice == "5":
#         print("Bye!")
#     else:
#         print("Please enter a valid command")
#         phonebook(d)


# phonebook(d)
            



