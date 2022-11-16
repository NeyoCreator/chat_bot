import re
import long_responses as long 

def message_probability(user_message,recognised_words,single_response=False, required_words=[]):
    message_certantity = 0
    has_required_words = True

    # COUNTS HOW MANY WORDS ARE PRESENT IN EACH PREDEFINED MESSAGE
    for word in user_message:
        if word in recognised_words:
            message_certantity += 1

    #CALCULATE THE PERCENTAGE OF RECOGNISED WORDS IN A USER MESSAGE 
    percentage = float(message_certantity)/ float(len(recognised_words))



#CREATE FUNCTION
def get_response(user_input):
    split_message = re.split(r'\s+|[,;?!.-]\s*',user_input.lower())
    response = check_all_messages(split_message)
    return response

#TESTING THE RESONSE SYSTEM 
while True:
    print('Bot: '+ get_response(input('You:')))