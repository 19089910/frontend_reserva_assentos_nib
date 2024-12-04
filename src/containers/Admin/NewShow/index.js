import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, useController } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMensage } from '../../../components/ErrorMensage'
import api from '../../../services/api'
import { Conteiner, Label, Input, ButtonStyles, LabelUpload } from './styles'

function NewShow() {
  const [fileName, setFileName] = useState(null)
  const [dates, setDates] = useState([])
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    showName: Yup.string().required('Digite o nome do show'),
    description: Yup.string().required('Digite a descrição do show'),
    date: Yup.object().required('Escolha uma data para o show'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', (value) => {
        return value?.length > 0
      })
      .test('fileSize', 'Carregue arquivos de até 2MB', (value) => {
        return value[0]?.size <= 2000000
      })
      .test('type', 'Carregue apenas arquivos JPEG ou PNG', (value) => {
        return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
      })
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const {
    field: selectField // Using `field` to connect to ReactSelect
  } = useController({
    name: 'date', // Field name
    control
  })

  const onSubmit = async (data) => {
    const showDataFormData = new FormData()
    showDataFormData.append('showName', data.showName)
    showDataFormData.append('description', data.description)
    showDataFormData.append('date', data.date.showDateTime)
    showDataFormData.append('file', data.file[0])

    await toast.promise(api.post('shows', showDataFormData), {
      pending: 'Cadastrando o show...',
      success: 'Show cadastrado com sucesso!',
      error: 'Erro ao cadastrar o show!'
    })
    setTimeout(() => {
      navigate('/listar-shows')
    }, 2000)
  }

  useEffect(() => {
    // Load show dates
    async function loadDates() {
      // Simulando os dados fornecidos como resposta da API
      const response = {
        data: {
          dates: [
            {
              showDateTime: '2024-10-20T19:30:00Z',
              seats: [{ seatNumber: 'A1', isAvailable: true }]
            },
            {
              showDateTime: '2024-10-21T19:30:00Z',
              seats: [{ seatNumber: 'A2', isAvailable: false }]
            }
          ]
        }
      }
      setDates(response.data.dates)
    }
    loadDates()
  }, [])

  return (
    <Conteiner>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome do Show</Label>
          <Input type="text" {...register('showName')} />
          <ErrorMensage>{errors.showName?.message}</ErrorMensage>
        </div>
        <div>
          <Label>Descrição</Label>
          <Input type="text" {...register('description')} />
          <ErrorMensage>{errors.description?.message}</ErrorMensage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue o banner do show
              </>
            )}
            <input
              type="file"
              accept="image/png,image/jpeg"
              {...register('file')}
              onChange={(value) => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMensage>{errors.file?.message}</ErrorMensage>
        </div>
        <div>
          <ReactSelect
            {...selectField}
            options={dates}
            getOptionLabel={(date) =>
              new Date(date.showDateTime).toLocaleString()
            }
            getOptionValue={(date) => date.showDateTime}
            placeholder="Escolha uma data"
          />
          <ErrorMensage>{errors.date?.message}</ErrorMensage>
        </div>
        <ButtonStyles type="submit">Cadastrar Show</ButtonStyles>
      </form>
    </Conteiner>
  )
}

export default NewShow
