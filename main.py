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

    #CHECKS THAT THE REQUIRED WORDS ARE IN THE STRING
    for word in required_words:
        if word not in user_message:
            has_required_words = False
            break

    if has_required_words or single_response:
        return int(percentage*100)
    else :
        return 0


def check_all_messages(message):
    high_prob_list = {}

    def response(bot_response,list_of_words, single_response = False, required_words=[]):
        nonlocal high_prob_list
        high_prob_list[bot_response]=message_probability(message, list_of_words, single_response,required_words)


    #Responses -------------------------------------------------------------------------------------------------
    response('Hello',['hello', 'hi','sup', 'hey','heyo'], single_response=True)
    response('I\' doing fine and you ', ['how', 'are', 'you','doing'], required_words=['how'])
    response('Thank you',['i','love','code','palace'], required_words=['code','palace'])

    best_match = max(high_prob_list, key=high_prob_list.get())
    print(high_prob_list)

    return best_match





#CREATE FUNCTION
def get_response(user_input):
    split_message = re.split(r'\s+|[,;?!.-]\s*',user_input.lower())
    response = check_all_messages(split_message)
    return response

#TESTING THE RESONSE SYSTEM 
while True:
    print('Bot: '+ get_response(input('You:')))