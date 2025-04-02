import sympy as sp
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import tkinter as tk
from tkinter import ttk, messagebox

class NewtonRaphsonApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Método de Newton-Raphson")
        self.root.geometry("900x700")
        
        # Variables de control
        self.funcion_var = tk.StringVar(value="x**2 - 2")
        self.x0_var = tk.StringVar(value="1.0")
        self.tol_var = tk.StringVar(value="1e-6")
        self.max_iter_var = tk.StringVar(value="100")
        
        # Crear widgets
        self.create_widgets()
        
    def create_widgets(self):
        # Frame principal
        main_frame = ttk.Frame(self.root, padding="10")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Frame de entrada
        input_frame = ttk.LabelFrame(main_frame, text="Parámetros", padding="10")
        input_frame.pack(fill=tk.X, pady=5)
        
        # Entrada de función
        ttk.Label(input_frame, text="Función f(x):").grid(row=0, column=0, sticky=tk.W)
        funcion_entry = ttk.Entry(input_frame, textvariable=self.funcion_var, width=30)
        funcion_entry.grid(row=0, column=1, padx=5, pady=2, sticky=tk.W)
        
        # Entrada de valor inicial
        ttk.Label(input_frame, text="Valor inicial (x0):").grid(row=1, column=0, sticky=tk.W)
        x0_entry = ttk.Entry(input_frame, textvariable=self.x0_var, width=10)
        x0_entry.grid(row=1, column=1, padx=5, pady=2, sticky=tk.W)
        
        # Entrada de tolerancia
        ttk.Label(input_frame, text="Tolerancia:").grid(row=2, column=0, sticky=tk.W)
        tol_entry = ttk.Entry(input_frame, textvariable=self.tol_var, width=10)
        tol_entry.grid(row=2, column=1, padx=5, pady=2, sticky=tk.W)
        
        # Entrada de iteraciones máximas
        ttk.Label(input_frame, text="Iteraciones máximas:").grid(row=3, column=0, sticky=tk.W)
        iter_entry = ttk.Entry(input_frame, textvariable=self.max_iter_var, width=10)
        iter_entry.grid(row=3, column=1, padx=5, pady=2, sticky=tk.W)
        
        # Botón de ejecución
        run_button = ttk.Button(input_frame, text="Ejecutar Método", command=self.run_newton_raphson)
        run_button.grid(row=4, column=0, columnspan=2, pady=10)
        
        # Frame de resultados
        result_frame = ttk.LabelFrame(main_frame, text="Resultados", padding="10")
        result_frame.pack(fill=tk.BOTH, expand=True, pady=5)
        
        # Texto de resultados
        self.result_text = tk.Text(result_frame, height=10, wrap=tk.WORD)
        self.result_text.pack(fill=tk.BOTH, expand=True)
        
        # Frame de gráfica
        graph_frame = ttk.LabelFrame(main_frame, text="Gráfica", padding="10")
        graph_frame.pack(fill=tk.BOTH, expand=True, pady=5)
        
        # Figura de matplotlib
        self.fig, self.ax = plt.subplots(figsize=(6, 4))
        self.canvas = FigureCanvasTkAgg(self.fig, master=graph_frame)
        self.canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)
        
    def run_newton_raphson(self):
        try:
            # Limpiar resultados anteriores
            self.result_text.delete(1.0, tk.END)
            self.ax.clear()
            
            # Obtener parámetros de la interfaz
            funcion_str = self.funcion_var.get()
            x0 = float(self.x0_var.get())
            tol = float(self.tol_var.get())
            max_iter = int(self.max_iter_var.get())
            
            # Definir la función y su derivada
            x = sp.symbols('x')
            y = sp.sympify(funcion_str)
            derivada = sp.diff(y, x)
            
            # Convertir a funciones numéricas
            f_lambdified = sp.lambdify(x, y, "numpy")
            f_prime_lambdified = sp.lambdify(x, derivada, "numpy")
            
            # Mostrar información inicial
            self.result_text.insert(tk.END, f"Método de Newton-Raphson:\n")
            self.result_text.insert(tk.END, f"Función: {y}\n")
            self.result_text.insert(tk.END, f"Derivada: {derivada}\n")
            self.result_text.insert(tk.END, f"Valor inicial (x0): {x0}\n")
            self.result_text.insert(tk.END, f"Tolerancia: {tol}\n")
            self.result_text.insert(tk.END, f"Iteraciones máximas: {max_iter}\n")
            self.result_text.insert(tk.END, "-"*50 + "\n")
            
            # Configurar gráfica
            x_vals = np.linspace(x0-2, x0+2, 400)
            y_vals = f_lambdified(x_vals)
            
            self.ax.plot(x_vals, y_vals, label="f(x)", color='blue')
            self.ax.axhline(0, color='black', linewidth=1)
            self.ax.axvline(0, color='black', linewidth=1)
            self.ax.grid(True)
            self.ax.set_title("Método de Newton-Raphson")
            self.ax.set_xlabel("x")
            self.ax.set_ylabel("f(x)")
            
            # Método de Newton-Raphson
            for i in range(max_iter):
                fx = f_lambdified(x0)
                fxd = f_prime_lambdified(x0)
                
                if abs(fxd) < tol:
                    self.result_text.insert(tk.END, f"Advertencia: derivada cercana a cero en x = {x0}\n")
                    break
                
                x1 = x0 - fx / fxd
                
                # Mostrar iteración en el texto
                self.result_text.insert(tk.END, f"Iteración {i+1}: x = {x1:.8f}, f(x) = {fx:.8f}\n")
                
                # Graficar punto actual
                self.ax.plot(x0, fx, 'ro')
                self.ax.plot([x0, x1], [fx, 0], 'r--')
                
                if abs(fx) < tol:
                    self.result_text.insert(tk.END, "-"*50 + "\n")
                    self.result_text.insert(tk.END, f"¡Convergencia alcanzada!\nRaíz encontrada: {x1:.8f}\n")
                    break
                
                x0 = x1
            else:
                self.result_text.insert(tk.END, "-"*50 + "\n")
                self.result_text.insert(tk.END, "Advertencia: Máximo de iteraciones alcanzado sin convergencia.\n")
            
            # Actualizar gráfica
            self.ax.legend()
            self.canvas.draw()
            
        except Exception as e:
            messagebox.showerror("Error", f"Ocurrió un error:\n{str(e)}")

if __name__ == "__main__":
    root = tk.Tk()
    app = NewtonRaphsonApp(root)
    root.mainloop()