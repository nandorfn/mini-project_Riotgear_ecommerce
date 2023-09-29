'use client'
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
  const [form, setForm] = useState(initialState)
  const handleInput = (e: React.SyntheticEvent) => {
    const { name, value } = (e.target as HTMLInputElement);
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <>
      <form className="w-96 mx-auto lg:mx-0 lg:w-1/3 rounded-xl">
        <div className="flex flex-col gap-3">
          <h2 className="font-medium">Hero Section</h2>
          <Input
            name={"heroTitle"}
            label="Title"
            handleInput={handleInput}
            value={form.heroTitle}
            placeholder="Type title here"
          />
          <Input
            name={"heroDesc"}
            label="Description"
            handleInput={handleInput}
            value={form.heroDesc}
            placeholder="Type description here"
          />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <h2 className="font-medium">Hero Image Content</h2>
          <Input
            name={"heroImgPrimary"}
            label="Primary"
            handleInput={handleInput}
            value={form.heroImgPrimary}
            placeholder="Type Link Here"
          />
          <Input
            name={"heroImgSecondary"}
            label=""
            handleInput={handleInput}
            value={form.heroImgSecondary}
            placeholder="Type Link Here"
          />
          <Input
            name={"heroImgAdditional"}
            label="Additional for Desktop"
            handleInput={handleInput}
            value={form.heroImgAdditional}
            placeholder="Type Link Here"
          />
        </div>
        <div className="flex justify-center">
          <button className="mt-3 w-full btn btn-primary">Save Changes</button>
        </div>
      </form>
    </>
  );
};

export default HeroSection;