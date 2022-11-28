const fs = require('fs')
const path = require('path')

const arg = process.argv
const templateName = arg[2]
const fileName = arg[3]

const nameJson = 'generate.json'
const FILENAME = 'FileName'
const pathGenerate = path.join(__dirname, '..')
//
Read()

// Поиск файла generate.json
function Read() {
	if (!fileName?.trim()) {
		return console.warn('undefined FileName')
	}

	fs.readdir(pathGenerate, (err, files) => {
		files.map((file) => {
			if (file === nameJson) {
				init()
			}
		})
	})
}

// Инициализация конфига
function init() {
	const pathJson = path.join(pathGenerate, nameJson)
	fs.readFile(pathJson, { encoding: 'utf8' }, (err, file) => {
		const dataJson = JSON.parse(file)
		read(dataJson)
	})
}

// Чтение конфига
function read(dataJson) {
	const template = Object.entries(dataJson.template)
	let findConfig = false

	template.map(([nameTemplate, infoTemplate]) => {
		// если нашли указанный template в командной строке
		if (templateName === nameTemplate) {
			generate(infoTemplate)
			findConfig = true
		}
	})

	if (!findConfig) {
		console.warn('this example is not found, review your generate.json')
	}
}

function generate(infoTemplate) {
	const generateFiles = infoTemplate.files
	const generateFolder = path.join(pathGenerate, infoTemplate.folder, fileName)

	CreateFolder(generateFolder)

	if (typeof generateFiles === 'string') {
		const templateFiles = path.join(pathGenerate, generateFiles)

		fs.readdir(templateFiles, (err, files) => {
			files.map((pathFile) => {
				const absPathFile = path.join(templateFiles, pathFile)
				GenerateFile(absPathFile, generateFolder)
			})
		})
	} else if (Array.isArray(generateFiles)) {
		generateFiles.map((file) => {
			const pathFile = path.join(pathGenerate, file)
			GenerateFile(pathFile, generateFolder)
		})
	}
}

function GenerateFile(pathFile, generateFolder) {
	fs.readFile(pathFile, { encoding: 'utf8' }, (err, value) => {
		if (err) {
			console.log(`Error path in "${pathFile}"`)
			return
		}

		// parse
		const pathParse = path.parse(pathFile)
		const ext = pathParse.ext
		const name = pathParse.name
		const replaceName = name.replace(FILENAME, fileName)
		const replacedData = value.replaceAll(FILENAME, fileName)
		// generate
		const generateFileName = `${replaceName}${ext}`
		const generatePathName = path.join(generateFolder, generateFileName)

		// write

		fs.writeFileSync(generatePathName, replacedData, (err, file) => {
			// console.log(err, file)
		})
	})
}

function CreateFolder(generateFolder) {
	fs.mkdir(generateFolder, (err, ok) => {
		if (err) {
			console.warn(`failed create folder in "${generateFolder}" path`)
		} else {
			console.log(generateFolder)
		}
	})
}
