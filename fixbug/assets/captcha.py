import random
def generator_captcha():
    global captcha
    lower_case = "abcdefghijklmnopqrstuvwxyz"
    upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    numbers = "0123456789"

    use_for = lower_case + upper_case + numbers
    length_for_pass = 6

    captcha = "".join(random.sample(use_for,length_for_pass))    
    print(captcha)

while True:
    generator_captcha()
    entrada = input("Digite o CAPTCHA acima! ")
    if entrada == captcha:
        print("Captcha correto. Bem vindo!")
        break
    else:
        print("Captcha incorreto. Tente novamente")
        continue