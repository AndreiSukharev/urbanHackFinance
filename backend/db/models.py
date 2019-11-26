class Models:
    users = '''
                CREATE TABLE IF NOT EXISTS users(
                user_id         SERIAL          NOT NULL    PRIMARY KEY,
                login           VARCHAR(64)     NOT NULL    UNIQUE,
                password        TEXT            NOT NULL,
                role            VARCHAR(64)     NOT NULL
                );'''
