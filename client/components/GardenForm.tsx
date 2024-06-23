import { useState } from 'react'
import type { PlotDatum } from '../../models/growGrub'
import PrimaryButton from './PrimaryButton'
import TertiaryButton from './TertiaryButton'
import DeleteButton from './DeleteButton'
import { Layout } from 'react-grid-layout'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

interface Props {
  plotData: PlotDatum[]
  setPlotData: React.Dispatch<React.SetStateAction<PlotDatum[]>>
  activeID: string
  onSaveGarden: () => void
  layout: Layout[]
  setLayout: React.Dispatch<React.SetStateAction<Layout[]>>
}

function GardenForm({
  plotData,
  setPlotData,
  activeID,
  onSaveGarden,
  layout,
  setLayout,
}: Props) {
  const [currentPlot, setCurrentPlot] = useState(
    plotData.find((plot) => plot.plotNumber === activeID),
  )

  function handleChange(
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) {
    const value =
      isNaN(Number(e.target.value)) || e.target.value === ''
        ? e.target.value
        : Number(e.target.value)

    const newPlot = {
      ...currentPlot!,
      [e.target.name]: value,
    }
    setPlots(newPlot)
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newPlot = {
      ...currentPlot!,
      [e.target.name]: e.target.checked,
    }
    setPlots(newPlot)
  }
  // if type is house - ask could you grow plants there?
  // otherwise hide the rest of the form.

  function setPlots(newPlot: PlotDatum) {
    const otherPlots = plotData.filter((plot) => plot.plotNumber !== activeID)
    setCurrentPlot({ ...newPlot })
    setPlotData([...otherPlots, newPlot])
  }

  function handleDeleteButtonPush() {
    confirmAlert({
      title: `Delete ${currentPlot?.name ? `${currentPlot?.name} plot` : `plot ${activeID}`}?`,
      message: 'Are you sure, you will lose all of your plants data?',
      buttons: [
        {
          label: 'Delete',
          onClick: handleDelete,
        },
        { label: 'No, save me!' },
      ],
    })
  }

  function handleDelete() {
    const plotsWithoutDeleted = plotData.filter(
      (plot) => plot.plotNumber !== String(activeID),
    )
    const layoutWithoutDeleted = layout.filter(
      (obj) => obj.i !== String(activeID),
    )
    setPlotData([...plotsWithoutDeleted])
    setLayout([...layoutWithoutDeleted])
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    onSaveGarden()
  }

  if (currentPlot?.blockType === 'house' && currentPlot?.growable === false) {
    return (
      <div className="garden-form">
        <form>
          {/* Name */}
          <input
            type="text"
            name="name"
            id="nameInput"
            className="text-xl font-semibold"
            value={currentPlot?.name}
            onChange={handleChange}
          />
          <br />
          {/* Type */}
          <label htmlFor="blockType">Type: </label> <br />
          <select
            value={currentPlot?.blockType}
            name="blockType"
            id="blockType"
            onChange={handleChange}
            className="dropmenu"
          >
            <option value="">No type</option>
            <option value="garden">Garden</option>
            <option value="house">House</option>
            <option value="path">Path</option>
            <option value="grass">Grass</option>
          </select>
          <br />
          <label htmlFor="growable">Could you grow food inside?</label>
          <input
            type="checkbox"
            name="growable"
            id="growable"
            checked={currentPlot.growable}
            onChange={handleCheckboxChange}
          />
          <br />
          <PrimaryButton onClick={handleSubmit}>
            Save garden & exit
          </PrimaryButton>
        </form>
      </div>
    )
  }

  return (
    <div className="garden-form">
      <form>
        {/* Name */}
        <input
          type="text"
          name="name"
          id="nameInput"
          className="text-xl font-semibold"
          value={currentPlot?.name}
          onChange={handleChange}
        />
        <br />
        {/* Type */}
        <label htmlFor="blockType">Type: </label> <br />
        <select
          value={currentPlot?.blockType}
          name="blockType"
          id="blockType"
          onChange={handleChange}
          className="dropmenu"
        >
          <option value="">No type</option>
          <option value="garden">Garden patch</option>
          <option value="house">House</option>
          <option value="path">Path</option>
          <option value="grass">Grass</option>
        </select>
        <br />
        {currentPlot?.blockType === 'house' && (
          <>
            <label htmlFor="growable">Could you grow food inside?</label>
            <input
              type="checkbox"
              name="growable"
              id="growable"
              checked={currentPlot.growable}
              onChange={handleCheckboxChange}
            />
            <br />
          </>
        )}
        {/* Size */}
        <label htmlFor="size">Size: </label> <br />
        <select
          value={currentPlot?.size}
          name="size"
          id="size"
          onChange={handleChange}
          className="dropmenu"
        >
          <option value="">How big is it?</option>
          <option value="1">1x1</option>
          <option value="2">2x2</option>
          <option value="3">3x3</option>
          <option value="4">4x4</option>
          <option value="5">5x5</option>
        </select>{' '}
        <br />
        {/* Shade */}
        <label htmlFor="sunLight">Sun: </label> <br />
        <select
          value={currentPlot?.sunLight}
          name="sunLight"
          id="sunLight"
          onChange={handleChange}
          className="dropmenu"
        >
          <option value="">How much sun does it get?</option>
          <option value="full-shade">Mostly shade</option>
          <option value="part-sun">Half a days sun</option>
          <option value="full-sun">Always sunny</option>
        </select>{' '}
        <br />
        {/* Wind */}
        <label htmlFor="rainExposure">Rain exposure: </label> <br />
        <select
          value={currentPlot?.rainExposure}
          name="rainExposure"
          id="rainExposure"
          onChange={handleChange}
          className="dropmenu"
        >
          <option value="">How exposed is it?</option>
          <option value="undercover">Under cover</option>
          <option value="partially">Partially</option>
          <option value="fully">Fully exposed</option>
        </select>{' '}
        <br />
        {/* Occupation */}
        {/* <label htmlFor="occupation">Occupation: </label> <br />
        <select
          value={currentPlot?.occupation}
          name="occupation"
          id="occupation"
          onChange={handleChange}
          className="dropmenu"
        >
          <option value="">--Empty?--</option>
          <option value="10">10%</option>
          <option value="20">20%</option>
          <option value="30">30%</option>
          <option value="40">40%</option>
          <option value="50">50%</option>
          <option value="60">60%</option>
          <option value="70">70%</option>
          <option value="80">80%</option>
          <option value="90">90%</option>
          <option value="100">100%</option>
        </select>{' '}
        <br /> */}
        <TertiaryButton onClick={() => console.log('clicked')}>
          Add plant
        </TertiaryButton>
        {/* <button className="add-plant" type="button">
          Add plant
        </button> */}
        <br />
        <PrimaryButton onClick={handleSubmit}>Save garden & exit</PrimaryButton>
        <DeleteButton onClick={handleDeleteButtonPush}>
          Delete plot
        </DeleteButton>
      </form>
    </div>
  )
}

// ADD PLANTS TO PLOT

// RECOMMENDED PLANTS - OTHERS

// Use Zacs drop down to let users choose from their desired plants first

// it should also suggest plants that require that amount of sunlight - and plants that should be planted at that time of year

// then, all the other plants that exist

// If a plant is added it needs to be stored in some sort of state

// When the garden is saved

export default GardenForm
