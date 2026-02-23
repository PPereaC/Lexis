import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const TimeNextReleasesFilter = ({ onChange, value }) => {

    const today = new Date().toISOString().split('T')[0];
    const proximaSemana = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const proximoMes = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const esteAnio = new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0];

    return (
        <Select onValueChange={onChange} value={value}>
            <SelectTrigger className="w-full max-w-50 border border-white/80">
                <SelectValue placeholder="Seleccionar período" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fecha</SelectLabel>
                    <SelectItem value={proximaSemana}>Próxima semana</SelectItem>
                    <SelectItem value={proximoMes}>Próximo mes</SelectItem>
                    <SelectItem value={esteAnio}>Este año</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default TimeNextReleasesFilter;