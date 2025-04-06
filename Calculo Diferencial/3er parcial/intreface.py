import tkinter as tk

ventana = tk.Tk()
ventana.title("Mi Programa")
ventana.geometry("400x300")   # Tamaño (ancho x alto)

# Creamos una etiqueta (texto)
etiqueta = tk.Label(ventana, text="¡Hola, mundo!")
etiqueta.pack()  # Lo colocamos en la ventana

ventana.mainloop()