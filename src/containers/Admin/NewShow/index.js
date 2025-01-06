/** FALTA:
 *  FAZER O SCHEMA NAO QUERBRAR COM O DateTimePicker
 * Mantendo o array vazio para seats
 */
// import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import ptBR from 'date-fns/locale/pt-BR'
import React, { useState } from 'react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMensage } from '../../../components/ErrorMensage'
import api from '../../../services/api'
import {
  Conteiner,
  Label,
  Input,
  ButtonStyles,
  LabelUpload,
  LabelDate,
  DivDate,
  Box,
  ButtonX
} from './styles'

function NewShow() {
  const [posterFileName, setPosterFileName] = useState(null)
  const [bannerFileName, setBannerFileName] = useState(null)
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    showName: Yup.string()
      .required('Digite o nome do show')
      .max(100, 'O nome do show deve ter no máximo 100 caracteres'),
    description: Yup.string()
      .required('Digite a descrição do show')
      .min(200, 'A descrição do show deve ter no mínimo 200 caracteres'),
    dates: Yup.array()
      .of(
        Yup.date().required('Escolha uma data e horário para o show').nullable()
      )
      .min(1, 'Adicione pelo menos uma data e horário'),
    poster: Yup.mixed()
      .required('Carregue o poster do show')
      .test(
        'fileSize',
        'Carregue arquivos de até 2MB',
        (value) => value?.[0]?.size <= 2000000
      )
      .test('type', 'Carregue apenas arquivos JPEG ou PNG', (value) => {
        return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
      }),
    banner: Yup.mixed()
      .required('Carregue o banner do show')
      .test(
        'fileSize',
        'Carregue arquivos de até 2MB',
        (value) => value?.[0]?.size <= 2000000
      )
      .test('type', 'Carregue apenas arquivos JPEG ou PNG', (value) => {
        return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
      })
  })
  console.log(schema)

  const {
    register,
    handleSubmit,
    control
    // formState: { errors }
  } = useForm({
    // resolver: yupResolver(schema)
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'dates'
  })

  const onSubmit = async (data) => {
    try {
      const showDataFormData = new FormData()
      showDataFormData.append('showName', data.showName)
      showDataFormData.append('description', data.description)
      // Organizar as dates como um JSON estruturado
      const datesData = data.dates.map((date) => ({
        showDateTime: new Date(date.showDateTime).toISOString(),
        seats: [] // Mantendo o array vazio para seats
      }))
      showDataFormData.append('dates', JSON.stringify(datesData))
      showDataFormData.append('poster', data.poster[0])
      showDataFormData.append('banner', data.banner[0])
      await toast.promise(api.post('shows', showDataFormData), {
        pending: 'Cadastrando o show...',
        success: 'Show cadastrado com sucesso!',
        error: 'Erro ao cadastrar o show!'
      })
      setTimeout(() => {
        navigate('/listar-shows')
      }, 2000)
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  const handleRemove = (index) => {
    if (window.confirm('Tem certeza que deseja remover esta data?')) {
      remove(index)
    }
  }

  return (
    <Conteiner>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome do Show</Label>
          <Input type="text" {...register('showName')} />
          <ErrorMensage>
            {
              // errors.showName?.message
            }
          </ErrorMensage>
        </div>
        <div>
          <Label>Descrição</Label>
          <Input type="text" {...register('description')} />
          <ErrorMensage>
            {
              // errors.description?.message
            }
          </ErrorMensage>
        </div>
        <div>
          <LabelUpload>
            {posterFileName || (
              <>
                <CloudUploadIcon />
                Carregue o poster do show
              </>
            )}
            <input
              type="file"
              accept="image/png,image/jpeg"
              {...register('poster')}
              onChange={(value) =>
                setPosterFileName(value.target.files[0]?.name)
              }
            />
          </LabelUpload>
          <ErrorMensage>
            {
              // errors.poster?.message
            }
          </ErrorMensage>
        </div>
        <div>
          <LabelUpload>
            {bannerFileName || (
              <>
                <CloudUploadIcon />
                Carregue o banner do show
              </>
            )}
            <input
              type="file"
              accept="image/png,image/jpeg"
              {...register('banner')}
              onChange={(value) =>
                setBannerFileName(value.target.files[0]?.name)
              }
            />
          </LabelUpload>
          <ErrorMensage>
            {
              // errors.banner?.message
            }
          </ErrorMensage>
        </div>
        <DivDate>
          {fields.map((field, index) => (
            <Box key={field.id}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={ptBR}
              >
                <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                  <ButtonX type="button" onClick={() => handleRemove(index)}>
                    x
                  </ButtonX>
                </div>
                <Controller
                  name={`dates[${index}].showDateTime`} // Alterado para 'showDateTime'
                  control={control}
                  render={({ field }) => (
                    <DateTimePicker
                      {...field}
                      label={`Data e horário ${index + 1}`}
                      disablePast
                      inputFormat="dd/MM/yyyy HH:mm"
                      renderInput={(params) => (
                        <Input
                          {...params}
                          fullWidth
                          // error={errors.dates?.[index]?.showDateTime}
                        />
                      )}
                    />
                  )}
                />
              </LocalizationProvider>
              <ErrorMensage>
                {
                  // errors.dates?.[index]?.showDateTime?.message
                }
              </ErrorMensage>{' '}
            </Box>
          ))}
          <LabelDate
            type="button"
            onClick={() => append({ showDateTime: null })}
          >
            + Data e Horário
          </LabelDate>
        </DivDate>

        <ButtonStyles type="submit">Cadastrar Show</ButtonStyles>
      </form>
    </Conteiner>
  )
}

export default NewShow
