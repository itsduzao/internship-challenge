from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status

class LCMCalculatorTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse('calcular_mmc')

    def test_successful_calculation(self):
        """Testa um cálculo válido de MMC"""
        data = {"x": 1, "y": 10}
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('result', response.data)
        self.assertIn('x', response.data)
        self.assertIn('y', response.data)
        self.assertEqual(response.data['x'], 1)
        self.assertEqual(response.data['y'], 10)
        # O resultado deve ser o MMC do range 1-10
        self.assertTrue(isinstance(response.data['result'], int))

    def test_x_greater_than_y(self):
        """Testa quando x é maior que y"""
        data = {"x": 10, "y": 5}
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['error'], 'O valor de x deve ser menor que o valor de y')

    def test_negative_numbers(self):
        """Testa com números negativos"""
        data = {"x": -1, "y": 5}
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['error'], 'Os valores de x e y devem ser maiores que 0')

    def test_zero_values(self):
        """Testa com valor zero"""
        data = {"x": 0, "y": 5}
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['error'], 'Os valores de x e y devem ser maiores que 0')

    def test_non_integer_values(self):
        """Testa com valores não inteiros"""
        data = {"x": "abc", "y": 5}
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['error'], 'Os valores de x e y devem ser números inteiros')

    def test_missing_parameters(self):
        """Testa com parâmetros faltando"""
        data = {"x": 1}
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('error', response.data)

    def test_empty_values(self):
        """Testa com valores vazios"""
        data = {"x": "", "y": ""}
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['error'], 'Os valores de x e y devem ser números inteiros')