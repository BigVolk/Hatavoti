import { Button } from "@mui/material"

const PillOptions = ({ options, setPillOptions}) => {

    return (
        <>
            {options.map((element, index) => {
                return (
                    <Button
                        onClick={() => {
                            const tempPillOptions = options.slice()
                            tempPillOptions[index].isClicked = !options[index].isClicked
                            setPillOptions(tempPillOptions)
                        }}
                        variant="solid"
                        endIcon={element.icon}
                        sx={{
                            fontSize: '17px',
                            margin: '10px 5px',
                            backgroundColor: element.isClicked ? "#505005" : "#808000",
                            borderRadius: '20px',
                        }}
                    >
                        {element.title}
                    </Button>
                )
            })}    </>
    )
}

export default PillOptions