import smtplib

def send_mail(sent_from, password, sent_to, subject, body):
    try:
        email_text = "From: {}\nTo: {}\nSubject: {}\n{}".format(sent_from, ", ".join(sent_to), subject, body)
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.ehlo()
        server.starttls()
        server.login(sent_from, password)
        server.sendmail(sent_from, sent_to, email_text)
        server.close()
        return 1
    except:
        return 0


