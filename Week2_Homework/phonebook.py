#Electronic Phone Book
# 1. Look up an entry
# 2. Set an entry
# 3. Delete an entry
# 4. List all entries
# 5. Quit
# What do you want to do (1-5)?

print('this far')
def welcome():
    entry = int(input("""Welcome to your contacts.
                      >>>The commands for this phone book are: 1, 2, 3, or 4 <<<
                      >>>What would you like to do?<<<
                      1. List all entries
                      2. Set an entry
                      3. Look up an entry
                      4. Delete an entry
                      5. Quit
                      Enter your entry here:    """))

    return entry

def phonebook():
    contact = {}
    while True:
        entry = welcome()
        if entry == 1:
            if bool(contact) != False:
                for k, v in contact.items():
                    print(k, '-->', v)
            else:
                print('Phonebook is empty. Go to the menu to add a new contact')
        elif entry == 2:
            contact_name = input('Enter contact name here: ')
            phone_number = input('Enter phone number here: ')
            if phone_number not in contact.items():
                contact.update({contact_name:phone_number})
                print('contact is now saved')
                print('Your updated phonebook is shown below: ')
                for k, v in contact.items():
                    print(k, '-->', v)
            else:
                print('That contact already exists.')
        elif entry == 3:
            name = input('Enter the name of the contact you\'d like to find:  ')
            if name in contact:
                print('The contact is', name,':',contact[name])
            else:
                print('This contact does not exist')
        elif entry == 4:
            name = input('Enter name of contact you wish to delete: ')
            if name in contact:
                print('The contact is',name,':', contact[name])
            else:
                print('Contact does not exist. \nReturn to the menu to enter the contact name')
            
            confirm = input('Are you sure you wish to delete this contact? yes/no?: ')
            if confirm.capitalize() == 'Yes':
                contact.pop(name,None)
                for k, v in contact.items():
                    print('Your updated phonebook is shown below:')
                    print(k, '-->', v)
            else:
                print('Return to the menu.')
        elif entry == 5:
            print('Goodbeye')
            break
        else:
            print('Entry does not exist.')


            



