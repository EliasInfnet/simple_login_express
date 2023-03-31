import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios'
import './App.css'

function App() {

  const form = useForm({
    initialValues: {
      email: 'elias@gmail.com',
      password: '1234',
    }
  });

  const handleSubmit = async (values) => {
    const { email, password } = values
    const result = axios.post('http://localhost:5000/login',
      {
        email,
        password
      }).then(res => res.data)
    console.log(result)
  }

  return (
    <div className="App">
      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />
          <TextInput
            label="Password"
            placeholder="your password"
            {...form.getInputProps('password')}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </div>
  )
}

export default App
