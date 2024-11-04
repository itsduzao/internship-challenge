import { useState } from 'react';
import { GlobalStyle, Container, LoaderIcon } from './styles';
import { Card } from '../Card';
import { Form, FormField } from '../Form';
import { Button } from '../Button';
import { Alert } from '../Alert';
import { API_URL } from '../../config/api';

export const LCMCalculator = () => {
  const [formData, setFormData] = useState({
    x: '',
    y: ''
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateInput = () => {
    const x = Number.parseInt(formData.x);
    const y = Number.parseInt(formData.y);

    if (Number.isNaN(x) || Number.isNaN(y)) {
      setError('Por favor, insira apenas números inteiros.');
      return false;
    }

    if (x <= 0 || y <= 0) {
      setError('Os números devem ser positivos.');
      return false;
    }

    if (x >= y) {
      setError('O primeiro número (x) deve ser menor que o segundo número (y).');
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value === '' || /^\d+$/.test(value)) {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      setError('');
      setResult(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!validateInput()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/calculadora/mmc/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          x: Number.parseInt(formData.x),
          y: Number.parseInt(formData.y)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao calcular MMC');
      }

      setResult(data.result);
    } catch (err) {
      setError(err.message || 'Erro ao comunicar com o servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <GlobalStyle/>
    <Container>
      <Card title="Calculadora de MMC">
        <Form onSubmit={handleSubmit}>
          <FormField
            id="x"
            name="x"
            label="Número inicial (x)"
            type="text"
            value={formData.x}
            onChange={handleChange}
            placeholder="Digite um número inteiro"
            disabled={loading}
          />

          <FormField
            id="y"
            name="y"
            label="Número final (y)"
            type="text"
            value={formData.y}
            onChange={handleChange}
            placeholder="Digite um número inteiro"
            disabled={loading}
          />

          {error && (
            <Alert variant="error">{error}</Alert>
          )}

          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <LoaderIcon size={16} />
                Calculando...
              </>
            ) : (
              'Calcular MMC'
            )}
          </Button>

          {result !== null && (
            <Alert variant="success">
              O menor número divisível por todos os números entre {formData.x} e {formData.y} é: 
              <strong style={{ marginLeft: '4px' }}>{result}</strong>
            </Alert>
          )}
        </Form>
      </Card>
    </Container>
    </>
  );
};