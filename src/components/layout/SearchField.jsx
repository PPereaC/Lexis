import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { SearchIcon } from "lucide-react"
import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const SearchField = ({ value = "", onChange, onSubmit }) => {
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value?.trim()) {
      if (onSubmit) {
        onSubmit()
      } else {
        navigate(`/buscar?q=${encodeURIComponent(value.trim())}`)
      }
    }
  }

  return (
    <InputGroup className="max-w-96 border border-gray-300">
      <InputGroupInput
        ref={inputRef}
        placeholder="Buscar..."
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={handleKeyDown}
        className="text-sm px-1 placeholder:text-gray-400"
      />
      <InputGroupAddon>
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd className="text-gray-300">⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default SearchField;
