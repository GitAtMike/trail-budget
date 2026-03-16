import { useState } from 'react'
import type { TripFormData } from '../types/trip'
import './NewTrip.css'

function NewTrip() {
    const [form, setForm] = useState<TripFormData>({
        name: '',
        destination: '',
        distance_miles: 0,
        gas_cost: 0,
        food_cost: 0,
        permit_cost: 0,
        gear_cost: 0,
        notes: '',
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault()
        console.log('Trip submitted:', form)
    }

    const total = Number(form.gas_cost) + Number(form.food_cost) + Number(form.permit_cost) + Number(form.gear_cost)

    return (
    <form className ="form-container" onSubmit={handleSubmit}>
        <h2>Plan a New Trip</h2>
        <input name="name" type="text" placeholder="Trip name" value={form.name} onChange={handleChange} />
        <input name="destination" type="text" placeholder="Destination" value={form.destination} onChange={handleChange} />
        <input name="distance_miles" type="number" placeholder="Distance (miles)" value={form.distance_miles} onChange={handleChange} />
        <input name="gas_cost" type="number" placeholder="Gas cost ($)" value={form.gas_cost} onChange={handleChange} />
        <input name="food_cost" type="number" placeholder="Food cost ($)" value={form.food_cost} onChange={handleChange} />
        <input name="permit_cost" type="number" placeholder="Permit cost ($)" value={form.permit_cost} onChange={handleChange} />
        <input name="gear_cost" type="number" placeholder="Gear cost ($)" value={form.gear_cost} onChange={handleChange} />
        <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
        <p className="total">Estimated Total: ${total}</p>
        <button type="submit">Save Trip</button>
    </form>
    )
}

export default NewTrip