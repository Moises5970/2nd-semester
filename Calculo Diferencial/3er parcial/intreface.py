import tkinter as tk

ventana = tk.Tk()
ventana.title("Calculadora de Newton Raphson")
ventana.geometry("400x300")   # Tamaño (ancho x alto)
ventana.configure(bg='#aac9d6')  # Color de fondo

#etiqueta
label1 = tk.Label(ventana, text = "Calculadora de Newton Raphson")
label1.grid(row = 0, column=0)
label1.pack(pady=10)

#botones
boton1 = tk.Button(ventana, text="Calcular")
boton1.pack(pady=10)

ventana.mainloop()