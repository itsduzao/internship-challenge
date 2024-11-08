from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .modules.lcm_range import lcm_range

@api_view(['POST'])
def calcular_mmc(request):
    try:
      x = request.data.get('x')
      y = request.data.get('y')

      if x is None or y is None:
        return Response({'error': 'Os valores de x e y são obrigatórios'}, status=status.HTTP_400_BAD_REQUEST)
      
      try:
        x = int(request.data.get('x'))
        y = int(request.data.get('y'))
      except ValueError:
        return Response({'error': 'Os valores de x e y devem ser números inteiros'}, status=status.HTTP_400_BAD_REQUEST)
      
      if x <= 0 or y <= 0:
        return Response({'error': 'Os valores de x e y devem ser maiores que 0'}, status=status.HTTP_400_BAD_REQUEST)
      
      if x >= y:
        return Response({'error': 'O valor de x deve ser menor que o valor de y'}, status=status.HTTP_400_BAD_REQUEST)
      
      result = lcm_range(x,y)

      return Response({'x': x, 'y': y, 'result': result}, status=status.HTTP_200_OK)
    except Exception as e:
      return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)