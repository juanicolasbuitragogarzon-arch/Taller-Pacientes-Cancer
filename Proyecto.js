import java.util.ArrayList;
import java.util.Date;
import java.util.List;

class Paciente {
    private String id;
    private String nombre;
    private int edad;
    private String genero;
    private String tipoCancer;
    private String etapa;
    private String estadoActual;

    private List<Examen> examenes;
    private List<Tratamiento> tratamientos;

    public Paciente(String id, String nombre, int edad, String genero, String tipoCancer, String etapa, String estadoActual) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.tipoCancer = tipoCancer;
        this.etapa = etapa;
        this.estadoActual = estadoActual;
        this.examenes = new ArrayList<>();
        this.tratamientos = new ArrayList<>();
    }

    public void agregarExamen(Examen examen) {
        examenes.add(examen);
    }

    public void agregarTratamiento(Tratamiento tratamiento) {
        tratamientos.add(tratamiento);
    }

    public String getTipoCancer() {
        return tipoCancer;
    }

    public String getEstadoActual() {
        return estadoActual;
    }

    @Override
    public String toString() {
        return nombre + " - " + tipoCancer + " - " + estadoActual;
    }
}

class Examen {
    private String idExamen;
    private Date fecha;
    private String tipo;
    private String resultado;

    public Examen(String idExamen, Date fecha, String tipo, String resultado) {
        this.idExamen = idExamen;
        this.fecha = fecha;
        this.tipo = tipo;
        this.resultado = resultado;
    }

    public void mostrarInformacion() {
        System.out.println("Examen: " + tipo + " Resultado: " + resultado);
    }
}

class Tratamiento {
    protected String id;
    protected String nombre;
    protected int duracionDias;
    protected String efectosSecundarios;

    public Tratamiento(String id, String nombre, int duracionDias, String efectosSecundarios) {
        this.id = id;
        this.nombre = nombre;
        this.duracionDias = duracionDias;
        this.efectosSecundarios = efectosSecundarios;
    }

    public double calcularEficacia(String tipoCancer) {
        return 50.0;
    }
}

class Quimioterapia extends Tratamiento {
    public Quimioterapia(String id, String nombre, int duracionDias, String efectosSecundarios) {
        super(id, nombre, duracionDias, efectosSecundarios);
    }

    @Override
    public double calcularEficacia(String tipoCancer) {
        return 75.0;
    }
}

class Radioterapia extends Tratamiento {
    public Radioterapia(String id, String nombre, int duracionDias, String efectosSecundarios) {
        super(id, nombre, duracionDias, efectosSecundarios);
    }

    @Override
    public double calcularEficacia(String tipoCancer) {
        return 65.0;
    }
}

class Cirugia extends Tratamiento {
    public Cirugia(String id, String nombre, int duracionDias, String efectosSecundarios) {
        super(id, nombre, duracionDias, efectosSecundarios);
    }

    @Override
    public double calcularEficacia(String tipoCancer) {
        return 80.0;
    }
}

class Inmunoterapia extends Tratamiento {
    public Inmunoterapia(String id, String nombre, int duracionDias, String efectosSecundarios) {
        super(id, nombre, duracionDias, efectosSecundarios);
    }

    @Override
    public double calcularEficacia(String tipoCancer) {
        return 70.0;
    }
}

class Hospital {
    private List<Paciente> pacientes;

    public Hospital() {
        pacientes = new ArrayList<>();
    }

    public void agregarPaciente(Paciente paciente) {
        pacientes.add(paciente);
    }

    public void contarPacientesPorCancer() {
        int leucemia = 0, linfoma = 0, sarcoma = 0;

        for (Paciente p : pacientes) {
            switch (p.getTipoCancer().toLowerCase()) {
                case "leucemia": leucemia++; break;
                case "linfoma": linfoma++; break;
                case "sarcoma": sarcoma++; break;
            }
        }

        System.out.println("Leucemia: " + leucemia);
        System.out.println("Linfoma: " + linfoma);
        System.out.println("Sarcoma: " + sarcoma);
    }

    public void calcularPorcentajeEstados() {
        int tratamiento = 0, remision = 0, fallecido = 0;

        for (Paciente p : pacientes) {
            switch (p.getEstadoActual().toLowerCase()) {
                case "en tratamiento": tratamiento++; break;
                case "remision": remision++; break;
                case "fallecido": fallecido++; break;
            }
        }

        int total = pacientes.size();

        System.out.println("En tratamiento: " + (tratamiento * 100.0 / total) + "%");
        System.out.println("Remisión: " + (remision * 100.0 / total) + "%");
        System.out.println("Fallecido: " + (fallecido * 100.0 / total) + "%");
    }
}

public class Main {
    public static void main(String[] args) {

        Hospital hospital = new Hospital();

        Paciente p1 = new Paciente("1", "Juan", 30, "M", "Leucemia", "II", "en tratamiento");
        Paciente p2 = new Paciente("2", "Ana", 25, "F", "Linfoma", "I", "remision");
        Paciente p3 = new Paciente("3", "Luis", 40, "M", "Sarcoma", "III", "fallecido");

        hospital.agregarPaciente(p1);
        hospital.agregarPaciente(p2);
        hospital.agregarPaciente(p3);

        Examen e1 = new Examen("E1", new Date(), "Resonancia", "Normal");
        p1.agregarExamen(e1);

        Tratamiento t1 = new Quimioterapia("T1", "Quimio", 30, "Nauseas");
        p1.agregarTratamiento(t1);

        hospital.contarPacientesPorCancer();
        hospital.calcularPorcentajeEstados();
    }
}
