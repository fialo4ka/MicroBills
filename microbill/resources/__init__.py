from .api import api
from .category import api as category_api
from .bill import api as bill_api
from .user import api as user_api


api.add_namespace(user_api)
api.add_namespace(category_api)
api.add_namespace(bill_api)