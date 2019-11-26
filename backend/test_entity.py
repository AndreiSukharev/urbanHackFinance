import psycopg2
import psycopg2.extras
from flask import session
from app.app import app
from db.database_config import Database
from db.connection import start_connection, close_connection
from app.resources.Common.Base import Base

password = Base.to_hash('123Wertyq')

users = [
    {
        'login': 'admin',
        'password': password,
        'role': 'admin',
    },
    {
        'login': 'user',
        'password': password,
        'role': 'user'
    }
]


def create_user(user):
    sql = """INSERT INTO   users (login, password, role)
                     VALUES (%s, %s, %s)
                    ;"""
    record = (user['login'], user['password'], user['role'])
    cursor.execute(sql, record)
    connection.commit()


connection, cursor = start_connection()

try:
    for user in users:
        create_user(user)
except Exception as e:
    print(e)
finally:
    close_connection(connection, cursor)