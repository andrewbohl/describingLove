import unittest
from src.views.colors.utils import payloadToColor, validateColorStrings
from src.types.Color import Color


class TestColorFunctions(unittest.TestCase):

    def setUp(self):
        validPayload = {
            "background": "#FF0000",
            "text": "#808000"
        }
        invalidColorText = {
            "background": "#FF00",
            "text": "#QWERTY"
        }

    def tearDown(self):
        pass

    def test_caseDoesNotMatter(self):
        self.assertIsNone(validateColorStrings(key='text', colorString='#ab1253'))
        self.assertIsNone(validateColorStrings(key='text', colorString='#AB1253'))

    def test_validationRequirements(self):
        self.assertIsNotNone(validateColorStrings(key='text', colorString='#123456789'))
        self.assertIsNotNone(validateColorStrings(key='text', colorString='123456'))
        self.assertIsNotNone(validateColorStrings(key='text', colorString='#QWERTY'))


if __name__ == '__main__':
    unittest.main()
