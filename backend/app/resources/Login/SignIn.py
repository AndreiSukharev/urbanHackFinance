from app.resources.Common.Base import Base
from flask import request, session


class SignIn(Base):

    def post(self):
        try:
            login = request.json['login']
            password_request = self.to_hash(request.json['password'])
            result = self.__check_login_password(login, password_request)
            if result != "ok":
                return {'message': result}
            res = {'message': 'ok', 'login': session['login'], 'id': session['user_id'], 'role': session['role']}
            print(res)
            return res
        except Exception as e:
            print(e)
            return e

    def __check_login_password(self, login, password_request):
        sql = '''SELECT user_id, password, role FROM users
                         WHERE login = %s
                        ;'''
        record = (login,)
        user_data = self.base_get_one(sql, record)
        if not user_data:
            return "Login does not exist"
        if password_request != user_data['password']:
            return "Invalid Passport"
        session['login'] = login
        session['user_id'] = user_data['user_id']
        session['role'] = user_data['role']
        print('user_id sign in: ', session['user_id'])
        return "ok"

