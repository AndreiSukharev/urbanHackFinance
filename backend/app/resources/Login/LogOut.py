from app.resources.Common.Base import Base
from flask import session


class LogOut(Base):

    def delete(self, user_id):
        try:
            session['login'] = ''
            session['user_id'] = ''
            session['role'] = ''
            return "ok"
        except Exception as e:
            print("logout", e)
