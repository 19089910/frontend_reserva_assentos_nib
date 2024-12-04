import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import {
  Conteiner,
  Label,
  Input,
  ButtonStyles,
  LabelUpload,
  ConteinerInput
} from './styles'

function EditShow() {
  const [categories, setCategories] = useState([])
  const [fileName, setFileName] = useState('')
  const [showData, setShowData] = useState(null) // Para armazenar os dados do show
  const { id } = useParams() // Obtemos o ID do show a partir da URL
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm()

  // Fetch dos dados do show pelo ID
  useEffect(() => {
    async function fetchShow() {
      try {
        const { data } = await api.get(`shows/${id}`)
        setShowData(data)
        reset({
          showName: data.showName,
          description: data.description,
          category: data.category
        })
      } catch (err) {
        toast.error('Erro ao carregar os dados do show!')
        navigate('/listar-shows') // Redireciona para a lista em caso de erro
      }
    }

    fetchShow()
  }, [id, reset, navigate])

  // Fetch das categorias
  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await api.get('categories')
        setCategories(data.categories)
      } catch (err) {
        toast.error('Erro ao carregar categorias!')
      }
    }

    fetchCategories()
  }, [])

  const onSubmit = async (formData) => {
    const form = new FormData()
    form.append('showName', formData.showName)
    form.append('description', formData.description)
    form.append('category_id', formData.category?.id || '')
    form.append('file', formData.file?.[0])

    try {
      await toast.promise(api.put(`shows/${id}`, form), {
        pending: 'Atualizando show...',
        success: 'Show atualizado com sucesso!',
        error: 'Erro ao atualizar show!'
      })
      navigate('/listar-shows')
    } catch (err) {
      toast.error('Erro ao atualizar show!')
    }
  }

  return (
    <Conteiner>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome do Show</Label>
          <Input
            type="text"
            {...register('showName', { required: 'O nome é obrigatório!' })}
          />
          {errors.showName && <p>{errors.showName.message}</p>}
        </div>

        <div>
          <Label>Descrição</Label>
          <Input
            type="text"
            {...register('description', {
              required: 'A descrição é obrigatória!'
            })}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div>
          <LabelUpload>
            {fileName || (
              <>
                <span>Carregar Imagem do Show</span>
              </>
            )}
            <input
              type="file"
              accept="image/png,image/jpeg"
              {...register('file')}
              onChange={(e) => setFileName(e.target.files[0]?.name)}
            />
          </LabelUpload>
        </div>

        <div>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                placeholder="Selecione uma categoria"
              />
            )}
          />
        </div>

        <ButtonStyles type="submit">Salvar Alterações</ButtonStyles>
      </form>
    </Conteiner>
  )
}

export default EditShow
