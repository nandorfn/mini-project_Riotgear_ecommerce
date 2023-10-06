'use client'
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import Input from "@/app/components/Form/Input";
import { useState } from "react";
const initialState = {
  heroTitle: '',
  heroDesc: '',
  heroImgPrimary: '',
  heroImgSecondary: '',
  heroImgAdditional: '',
}

const HeroSection: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const handleInput = (e: React.SyntheticEvent) => {
    const { name, value } = (e.target as HTMLInputElement);
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleEdit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    setEditMode(!editMode)
  }
  const handleSave = (e:React.SyntheticEvent) => {
    e.preventDefault();
    setEditMode(!editMode)
  }

  return (
    <>
      <form className="w-96 mx-auto lg:mx-0 lg:w-1/3 rounded-xl">
        <div className="flex flex-col gap-3">
          <h2 className="font-medium">Hero Section</h2>
          <label>
            Title
            <Input
              name={"heroTitle"}
              type="text"
              handleInput={handleInput}
              value={form.heroTitle}
              placeholder="Type title here"
            />
          </label>
          <label>
            Description
            <Input
              type="text"
              name={"heroDesc"}
              handleInput={handleInput}
              value={form.heroDesc}
              placeholder="Type description here"
            />
          </label>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <h2 className="font-medium">Hero Image Content</h2>
          <label>
            Primary
            <Input
              name={"heroImgPrimary"}
              handleInput={handleInput}
              type="text"
              value={form.heroImgPrimary}
              placeholder="Type Link Here"
            />
          </label>
          <label>
            <Input
              type="text"
              name={"heroImgSecondary"}
              handleInput={handleInput}
              value={form.heroImgSecondary}
              placeholder="Type Link Here"
            />
          </label>
          <label >
          Additional for Desktop
            <Input
              name={"heroImgAdditional"}
              handleInput={handleInput}
              type="text"
              value={form.heroImgAdditional}
              placeholder="Type Link Here"
              disabled={editMode}
              />
          </label>
        </div>
        <Flex align={'between'} className="mt-3">
        { !editMode
          ? <Button onClick={handleEdit} variant={'success'} size={'full'}>Save Changes</Button>
          : <Button onClick={handleEdit} variant={'primary'} size={'full'}>Edit</Button>
        }
          
          
        </Flex>
      </form>
    </>
  );
};

export default HeroSection;