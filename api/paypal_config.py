from django.http import HttpResponse
import paypalrestsdk
from paypalrestsdk import CreditCard


def payment(request):
    paypalrestsdk.configure({
        "mode": "live",  # Cambia a "live" para producción
        "client_id": "AV_cmgu0-Z1yq-QSvNmmsOQcXR5vQ4GwexdNDESvHuRg3xwOqxc1OR7tv0gQOyzE1YXgsgT5s1uf2o5J",
        "client_secret": "EEfololXWSygXuwv6GqIECFLF6bwoVqiuke11y6c7p69zRhC1W42m6549E6wM97ybBoBiJOOC3cF4Kqz"
    })

    # credit_card = CreditCard({
    #         "type": "visa",
    #         "number": "4024007185826731",
    #         "expire_month": "12",
    #         "expire_year": "2022",
    #         "cvv2": "874",
    #         "first_name": "Joe",
    #         "last_name": "Shopper",
    #     })

    # if credit_card.create():
    #         print("CreditCard[%s] created successfully" % (credit_card.id ))
    #         return HttpResponse('good')
    # else:
    #         print("Error while creating CreditCard:")
    #         print(credit_card.error)